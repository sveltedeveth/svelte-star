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
export type FaStaylinkedProps = typeof __propDef.props;
export type FaStaylinkedEvents = typeof __propDef.events;
export type FaStaylinkedSlots = typeof __propDef.slots;
export default class FaStaylinked extends SvelteComponentTyped<FaStaylinkedProps, FaStaylinkedEvents, FaStaylinkedSlots> {
}
export {};
