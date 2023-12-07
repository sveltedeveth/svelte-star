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
export type IoIosWaterProps = typeof __propDef.props;
export type IoIosWaterEvents = typeof __propDef.events;
export type IoIosWaterSlots = typeof __propDef.slots;
export default class IoIosWater extends SvelteComponentTyped<IoIosWaterProps, IoIosWaterEvents, IoIosWaterSlots> {
}
export {};
