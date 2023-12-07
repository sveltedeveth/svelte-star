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
export type DiBootstrapProps = typeof __propDef.props;
export type DiBootstrapEvents = typeof __propDef.events;
export type DiBootstrapSlots = typeof __propDef.slots;
export default class DiBootstrap extends SvelteComponentTyped<DiBootstrapProps, DiBootstrapEvents, DiBootstrapSlots> {
}
export {};
