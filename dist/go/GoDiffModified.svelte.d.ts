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
export type GoDiffModifiedProps = typeof __propDef.props;
export type GoDiffModifiedEvents = typeof __propDef.events;
export type GoDiffModifiedSlots = typeof __propDef.slots;
export default class GoDiffModified extends SvelteComponentTyped<GoDiffModifiedProps, GoDiffModifiedEvents, GoDiffModifiedSlots> {
}
export {};
