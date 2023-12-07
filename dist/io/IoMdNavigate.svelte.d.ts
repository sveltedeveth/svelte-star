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
export type IoMdNavigateProps = typeof __propDef.props;
export type IoMdNavigateEvents = typeof __propDef.events;
export type IoMdNavigateSlots = typeof __propDef.slots;
export default class IoMdNavigate extends SvelteComponentTyped<IoMdNavigateProps, IoMdNavigateEvents, IoMdNavigateSlots> {
}
export {};
