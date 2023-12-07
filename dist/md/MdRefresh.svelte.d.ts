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
export type MdRefreshProps = typeof __propDef.props;
export type MdRefreshEvents = typeof __propDef.events;
export type MdRefreshSlots = typeof __propDef.slots;
export default class MdRefresh extends SvelteComponentTyped<MdRefreshProps, MdRefreshEvents, MdRefreshSlots> {
}
export {};
