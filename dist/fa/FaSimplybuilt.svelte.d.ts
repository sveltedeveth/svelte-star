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
export type FaSimplybuiltProps = typeof __propDef.props;
export type FaSimplybuiltEvents = typeof __propDef.events;
export type FaSimplybuiltSlots = typeof __propDef.slots;
export default class FaSimplybuilt extends SvelteComponentTyped<FaSimplybuiltProps, FaSimplybuiltEvents, FaSimplybuiltSlots> {
}
export {};
