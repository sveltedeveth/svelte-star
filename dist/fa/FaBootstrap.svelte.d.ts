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
export type FaBootstrapProps = typeof __propDef.props;
export type FaBootstrapEvents = typeof __propDef.events;
export type FaBootstrapSlots = typeof __propDef.slots;
export default class FaBootstrap extends SvelteComponentTyped<FaBootstrapProps, FaBootstrapEvents, FaBootstrapSlots> {
}
export {};
