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
export type IoIosHeartProps = typeof __propDef.props;
export type IoIosHeartEvents = typeof __propDef.events;
export type IoIosHeartSlots = typeof __propDef.slots;
export default class IoIosHeart extends SvelteComponentTyped<IoIosHeartProps, IoIosHeartEvents, IoIosHeartSlots> {
}
export {};
