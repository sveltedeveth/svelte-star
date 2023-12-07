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
export type IoMdFlashlightProps = typeof __propDef.props;
export type IoMdFlashlightEvents = typeof __propDef.events;
export type IoMdFlashlightSlots = typeof __propDef.slots;
export default class IoMdFlashlight extends SvelteComponentTyped<IoMdFlashlightProps, IoMdFlashlightEvents, IoMdFlashlightSlots> {
}
export {};
