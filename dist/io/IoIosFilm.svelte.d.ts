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
export type IoIosFilmProps = typeof __propDef.props;
export type IoIosFilmEvents = typeof __propDef.events;
export type IoIosFilmSlots = typeof __propDef.slots;
export default class IoIosFilm extends SvelteComponentTyped<IoIosFilmProps, IoIosFilmEvents, IoIosFilmSlots> {
}
export {};
