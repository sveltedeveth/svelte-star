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
export type FaMixcloudProps = typeof __propDef.props;
export type FaMixcloudEvents = typeof __propDef.events;
export type FaMixcloudSlots = typeof __propDef.slots;
export default class FaMixcloud extends SvelteComponentTyped<FaMixcloudProps, FaMixcloudEvents, FaMixcloudSlots> {
}
export {};
