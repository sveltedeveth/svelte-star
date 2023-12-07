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
export type GiTorcProps = typeof __propDef.props;
export type GiTorcEvents = typeof __propDef.events;
export type GiTorcSlots = typeof __propDef.slots;
export default class GiTorc extends SvelteComponentTyped<GiTorcProps, GiTorcEvents, GiTorcSlots> {
}
export {};
