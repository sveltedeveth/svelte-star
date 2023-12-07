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
export type FaSquarespaceProps = typeof __propDef.props;
export type FaSquarespaceEvents = typeof __propDef.events;
export type FaSquarespaceSlots = typeof __propDef.slots;
export default class FaSquarespace extends SvelteComponentTyped<FaSquarespaceProps, FaSquarespaceEvents, FaSquarespaceSlots> {
}
export {};
