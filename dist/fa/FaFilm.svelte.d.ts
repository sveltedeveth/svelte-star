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
export type FaFilmProps = typeof __propDef.props;
export type FaFilmEvents = typeof __propDef.events;
export type FaFilmSlots = typeof __propDef.slots;
export default class FaFilm extends SvelteComponentTyped<FaFilmProps, FaFilmEvents, FaFilmSlots> {
}
export {};
