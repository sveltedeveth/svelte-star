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
export type IoIosImageProps = typeof __propDef.props;
export type IoIosImageEvents = typeof __propDef.events;
export type IoIosImageSlots = typeof __propDef.slots;
export default class IoIosImage extends SvelteComponentTyped<IoIosImageProps, IoIosImageEvents, IoIosImageSlots> {
}
export {};
