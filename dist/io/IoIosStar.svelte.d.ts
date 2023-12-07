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
export type IoIosStarProps = typeof __propDef.props;
export type IoIosStarEvents = typeof __propDef.events;
export type IoIosStarSlots = typeof __propDef.slots;
export default class IoIosStar extends SvelteComponentTyped<IoIosStarProps, IoIosStarEvents, IoIosStarSlots> {
}
export {};
