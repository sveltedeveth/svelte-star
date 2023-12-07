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
export type MdCakeProps = typeof __propDef.props;
export type MdCakeEvents = typeof __propDef.events;
export type MdCakeSlots = typeof __propDef.slots;
export default class MdCake extends SvelteComponentTyped<MdCakeProps, MdCakeEvents, MdCakeSlots> {
}
export {};
