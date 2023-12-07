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
export type MdLaunchProps = typeof __propDef.props;
export type MdLaunchEvents = typeof __propDef.events;
export type MdLaunchSlots = typeof __propDef.slots;
export default class MdLaunch extends SvelteComponentTyped<MdLaunchProps, MdLaunchEvents, MdLaunchSlots> {
}
export {};
