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
export type FaStudiovinariProps = typeof __propDef.props;
export type FaStudiovinariEvents = typeof __propDef.events;
export type FaStudiovinariSlots = typeof __propDef.slots;
export default class FaStudiovinari extends SvelteComponentTyped<FaStudiovinariProps, FaStudiovinariEvents, FaStudiovinariSlots> {
}
export {};
