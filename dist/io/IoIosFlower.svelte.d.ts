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
export type IoIosFlowerProps = typeof __propDef.props;
export type IoIosFlowerEvents = typeof __propDef.events;
export type IoIosFlowerSlots = typeof __propDef.slots;
export default class IoIosFlower extends SvelteComponentTyped<IoIosFlowerProps, IoIosFlowerEvents, IoIosFlowerSlots> {
}
export {};
