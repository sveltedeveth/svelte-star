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
export type GiFilmSpoolProps = typeof __propDef.props;
export type GiFilmSpoolEvents = typeof __propDef.events;
export type GiFilmSpoolSlots = typeof __propDef.slots;
export default class GiFilmSpool extends SvelteComponentTyped<GiFilmSpoolProps, GiFilmSpoolEvents, GiFilmSpoolSlots> {
}
export {};
