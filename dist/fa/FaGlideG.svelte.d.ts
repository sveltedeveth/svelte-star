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
export type FaGlideGProps = typeof __propDef.props;
export type FaGlideGEvents = typeof __propDef.events;
export type FaGlideGSlots = typeof __propDef.slots;
export default class FaGlideG extends SvelteComponentTyped<FaGlideGProps, FaGlideGEvents, FaGlideGSlots> {
}
export {};
