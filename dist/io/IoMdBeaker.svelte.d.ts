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
export type IoMdBeakerProps = typeof __propDef.props;
export type IoMdBeakerEvents = typeof __propDef.events;
export type IoMdBeakerSlots = typeof __propDef.slots;
export default class IoMdBeaker extends SvelteComponentTyped<IoMdBeakerProps, IoMdBeakerEvents, IoMdBeakerSlots> {
}
export {};
