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
export type IoIosHeadsetProps = typeof __propDef.props;
export type IoIosHeadsetEvents = typeof __propDef.events;
export type IoIosHeadsetSlots = typeof __propDef.slots;
export default class IoIosHeadset extends SvelteComponentTyped<IoIosHeadsetProps, IoIosHeadsetEvents, IoIosHeadsetSlots> {
}
export {};
