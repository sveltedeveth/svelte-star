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
export type MdNavigateBeforeProps = typeof __propDef.props;
export type MdNavigateBeforeEvents = typeof __propDef.events;
export type MdNavigateBeforeSlots = typeof __propDef.slots;
export default class MdNavigateBefore extends SvelteComponentTyped<MdNavigateBeforeProps, MdNavigateBeforeEvents, MdNavigateBeforeSlots> {
}
export {};
