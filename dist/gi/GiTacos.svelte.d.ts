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
export type GiTacosProps = typeof __propDef.props;
export type GiTacosEvents = typeof __propDef.events;
export type GiTacosSlots = typeof __propDef.slots;
export default class GiTacos extends SvelteComponentTyped<GiTacosProps, GiTacosEvents, GiTacosSlots> {
}
export {};
