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
export type GiFilmStripProps = typeof __propDef.props;
export type GiFilmStripEvents = typeof __propDef.events;
export type GiFilmStripSlots = typeof __propDef.slots;
export default class GiFilmStrip extends SvelteComponentTyped<GiFilmStripProps, GiFilmStripEvents, GiFilmStripSlots> {
}
export {};
