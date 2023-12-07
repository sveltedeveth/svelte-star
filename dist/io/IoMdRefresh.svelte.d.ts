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
export type IoMdRefreshProps = typeof __propDef.props;
export type IoMdRefreshEvents = typeof __propDef.events;
export type IoMdRefreshSlots = typeof __propDef.slots;
export default class IoMdRefresh extends SvelteComponentTyped<IoMdRefreshProps, IoMdRefreshEvents, IoMdRefreshSlots> {
}
export {};
