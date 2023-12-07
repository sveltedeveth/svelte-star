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
export type IoMdFilmProps = typeof __propDef.props;
export type IoMdFilmEvents = typeof __propDef.events;
export type IoMdFilmSlots = typeof __propDef.slots;
export default class IoMdFilm extends SvelteComponentTyped<IoMdFilmProps, IoMdFilmEvents, IoMdFilmSlots> {
}
export {};
