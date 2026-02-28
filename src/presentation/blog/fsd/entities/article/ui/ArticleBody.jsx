import React from 'react';
import { Typography } from '../../../shared/ui/typography/Typography';

export const ArticleBody = () => {
    return (
        <article className="prose prose-slate lg:prose-lg max-w-none dark:prose-invert">
            <Typography variant="h1" as="h1">
                ¿Qué es FSD (Feature-Sliced Design)?
            </Typography>

            <Typography variant="lead" as="p">
                Este es el escenario perfecto para ver cómo FSD brilla en la vida real. Un listado de usuarios con tabla, filtros y paginación es complejo porque mezcla componentes visuales tontos (UI pura) con estado global, llamadas a la API y reglas de negocio.
            </Typography>

            <Typography variant="body" as="p">
                Vamos a desarmar esta pantalla ("User List View") desde los cimientos (Shared) hasta el techo (Page), respetando la regla de que nadie puede importar de arriba hacia abajo.
            </Typography>

            <Typography variant="h2" as="h2">
                Aquí tienes cómo se distribuirían las piezas en tu código:
            </Typography>

            <div className="space-y-12 mt-8">
                <section>
                    <Typography variant="h3" as="h3">1. Capa shared (Tus Átomos y Moléculas agnósticos)</Typography>
                    <Typography variant="body">Aquí viven los componentes de UI que no tienen idea de que existe algo llamado "Usuario". Solo reciben props y emiten eventos.</Typography>
                    <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400">
                        <li><code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-sm text-pink-500">shared/ui/table</code>: Un componente genérico <code>{'<Table data={...} columns={...} />'}</code>.</li>
                        <li><code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-sm text-pink-500">shared/ui/pagination</code>: Un <code>{'<Paginator currentPage={1} total={10} onChange={...} />'}</code>.</li>
                        <li><code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-sm text-pink-500">shared/ui/input</code>: El campo de texto para el buscador.</li>
                        <li><code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-sm text-pink-500">shared/ui/typography</code>: Para el título del Header.</li>
                    </ul>
                </section>

                <section>
                    <Typography variant="h3" as="h3">2. Capa entities (El Dominio del "Usuario")</Typography>
                    <Typography variant="body">Aquí definimos qué es un usuario y cómo traemos la lista del backend. No hay filtros ni paginación todavía, solo la definición y la UI básica.</Typography>
                    <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400">
                        <li><code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-sm text-pink-500">entities/user/model</code>: Tipos (IUser) y el servicio de la API (getUsers()).</li>
                        <li><code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-sm text-pink-500">entities/user/ui/UserAvatar</code>: Un componente pequeñito para mostrar la foto y el nombre en una celda de la tabla.</li>
                    </ul>
                    <Typography variant="small" className="mt-4 italic">
                        (Nota: La entidad sabe cómo mostrar a UN usuario, pero no gestiona la lógica compleja de la tabla entera).
                    </Typography>
                </section>

                <section>
                    <Typography variant="h3" as="h3">3. Capa features (Las interacciones del usuario)</Typography>
                    <Typography variant="body">Aquí convertimos los componentes "tontos" de shared en herramientas que interactúan con el negocio.</Typography>
                    <div className="space-y-4 ml-6">
                        <div>
                            <Typography variant="body" className="font-semibold mb-1">features/user-filtering:</Typography>
                            <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400">
                                <li>UI: Un componente <code>{'<UserFiltersBar />'}</code> que usa los Input de shared.</li>
                                <li>Lógica: Un custom hook que actualiza la URL (ej. ?search=luigi) o el estado global cuando el usuario escribe.</li>
                            </ul>
                        </div>
                        <div>
                            <Typography variant="body" className="font-semibold mb-1">features/user-pagination:</Typography>
                            <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400">
                                <li>UI: Un componente <code>{'<UserPaginator />'}</code> que envuelve el paginador de shared y lo conecta con el estado de la página actual.</li>
                            </ul>
                        </div>
                        <div>
                            <Typography variant="body" className="font-semibold mb-1 mt-4">features/user-delete:</Typography>
                            <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400">
                                <li>UI: Un componente <code>{'<DeleteUserAction />'}</code> que engloba un botón para abrir un Modal de advertencia. Ambos componentes visuales base provienen de shared.</li>
                                <li>Lógica: Orquesta el estado de apertura/cierre del Modal, invoca la mutación de la Entidad para borrar al usuario y maneja el estado visual de carga.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <Typography variant="h3" as="h3">4. Capa widgets (El ensamblaje pesado)</Typography>
                    <Typography variant="body">Aquí es donde ocurre la magia. Un Widget es un bloque autónomo que agarra la Entidad y le inyecta las Features.</Typography>
                    <Typography variant="body" className="font-semibold mt-4">widgets/user-list-board:</Typography>
                    <Typography variant="body">Este es el componente principal. ¿Qué hace internamente?</Typography>
                    <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400 mb-6">
                        <li>Llama al hook que trae los datos (<code>entities/user/model</code>).</li>
                        <li>Pinta la barra de filtros arriba (<code>features/user-filtering</code>).</li>
                        <li>Pinta la tabla (<code>shared/ui/table</code>) pasándole los datos de los usuarios. En las celdas usa UserAvatar (<code>entities</code>).</li>
                        <li>Pinta el paginador abajo (<code>features/user-pagination</code>).</li>
                        <li>Añade la columna de acciones con el botón de papelera y su modal de confirmación correspondiente (<code>features/user-delete</code>).</li>
                    </ul>

                    <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto text-sm text-slate-300">
                        <pre><code>{`// Ejemplo conceptual de cómo se ve el Widget por dentro
import { Table } from 'shared/ui/table';
import { UserFiltersBar } from 'features/user-filtering';
import { UserPaginator } from 'features/user-pagination';
import { useUsersList, UserAvatar } from 'entities/user';

export const UserListBoard = () => {
  // El hook orquesta el estado basado en los filtros y la página actual
  const { users, isLoading } = useUsersList(); 

  // Definimos las columnas inyectando componentes de la Entidad
  const columns = [
    { header: 'Perfil', render: (user) => <UserAvatar user={user} /> },
    { header: 'Email', render: (user) => user.email },
  ];

  return (
    <div className="user-board-widget">
      <UserFiltersBar /> {/* Feature */}
      
      <Table data={users} columns={columns} loading={isLoading} /> {/* Shared + Entity */}
      
      <UserPaginator /> {/* Feature */}
    </div>
  );
};`}</code></pre>
                    </div>
                </section>

                <section>
                    <Typography variant="h3" as="h3">5. Capa pages (La vista final)</Typography>
                    <Typography variant="body">La página es extremadamente delgada. Su único trabajo es componer la pantalla usando Layouts o Widgets y proveer contexto si es necesario (como el título de la pestaña del navegador).</Typography>

                    <div className="bg-slate-900 rounded-lg p-4 mt-6 overflow-x-auto text-sm text-slate-300">
                        <pre><code>{`// src/pages/users-page/ui/UsersPage.tsx
import { PageHeader } from 'shared/ui/header'; // o un widget general
import { UserListBoard } from 'widgets/user-list-board';

export const UsersPage = () => {
  return (
    <main>
      <PageHeader title="Gestión de Usuarios" />
      <UserListBoard />
    </main>
  );
};`}</code></pre>
                    </div>
                </section>

                <section className="bg-indigo-50 dark:bg-slate-800/50 p-6 rounded-xl mt-12 border border-indigo-100 dark:border-slate-700">
                    <Typography variant="h3" as="h3" className="text-indigo-900 dark:text-indigo-400 mt-0">¿Por qué esta estructura te salva la vida?</Typography>
                    <ul className="space-y-4">
                        <li>
                            <strong>Reusabilidad extrema:</strong> Si mañana te piden poner un <code>{'<UserPaginator />'}</code> idéntico en una vista de "Usuarios Bloqueados", ya lo tienes en features.
                        </li>
                        <li>
                            <strong>Si cambias de librería de UI:</strong> Si decides dejar de usar una tabla hecha a mano y pasarte a Material UI o TanStack Table, solo tocas la capa <code>shared/ui/table</code>. Ni tus features, ni tus entidades, ni tu widget se rompen, porque ellos dependen del contrato que definiste, no de la librería externa.
                        </li>
                        <li>
                            <strong>Aislamiento de errores:</strong> Si la paginación se rompe, sabes exactamente que el problema está en <code>features/user-pagination</code>, sin tener que leer las 500 líneas de código de la tabla o los filtros.
                        </li>
                    </ul>
                </section>
            </div>
        </article>
    );
};
