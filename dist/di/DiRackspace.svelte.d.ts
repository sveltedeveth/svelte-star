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
export type DiRackspaceProps = typeof __propDef.props;
export type DiRackspaceEvents = typeof __propDef.events;
export type DiRackspaceSlots = typeof __propDef.slots;
export default class DiRackspace extends SvelteComponentTyped<DiRackspaceProps, DiRackspaceEvents, DiRackspaceSlots> {
}
export {};
