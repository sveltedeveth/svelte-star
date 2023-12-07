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
export type IoMdCodeWorkingProps = typeof __propDef.props;
export type IoMdCodeWorkingEvents = typeof __propDef.events;
export type IoMdCodeWorkingSlots = typeof __propDef.slots;
export default class IoMdCodeWorking extends SvelteComponentTyped<IoMdCodeWorkingProps, IoMdCodeWorkingEvents, IoMdCodeWorkingSlots> {
}
export {};
