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
export type IoMdEyeProps = typeof __propDef.props;
export type IoMdEyeEvents = typeof __propDef.events;
export type IoMdEyeSlots = typeof __propDef.slots;
export default class IoMdEye extends SvelteComponentTyped<IoMdEyeProps, IoMdEyeEvents, IoMdEyeSlots> {
}
export {};
