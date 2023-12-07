import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TiFilmProps = typeof __propDef.props;
export type TiFilmEvents = typeof __propDef.events;
export type TiFilmSlots = typeof __propDef.slots;
export default class TiFilm extends SvelteComponentTyped<TiFilmProps, TiFilmEvents, TiFilmSlots> {
}
export {};
