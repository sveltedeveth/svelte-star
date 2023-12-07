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
export type IoMdFlowerProps = typeof __propDef.props;
export type IoMdFlowerEvents = typeof __propDef.events;
export type IoMdFlowerSlots = typeof __propDef.slots;
export default class IoMdFlower extends SvelteComponentTyped<IoMdFlowerProps, IoMdFlowerEvents, IoMdFlowerSlots> {
}
export {};
