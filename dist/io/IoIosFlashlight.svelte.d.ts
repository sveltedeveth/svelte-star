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
export type IoIosFlashlightProps = typeof __propDef.props;
export type IoIosFlashlightEvents = typeof __propDef.events;
export type IoIosFlashlightSlots = typeof __propDef.slots;
export default class IoIosFlashlight extends SvelteComponentTyped<IoIosFlashlightProps, IoIosFlashlightEvents, IoIosFlashlightSlots> {
}
export {};
