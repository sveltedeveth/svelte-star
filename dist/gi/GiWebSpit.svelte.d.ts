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
export type GiWebSpitProps = typeof __propDef.props;
export type GiWebSpitEvents = typeof __propDef.events;
export type GiWebSpitSlots = typeof __propDef.slots;
export default class GiWebSpit extends SvelteComponentTyped<GiWebSpitProps, GiWebSpitEvents, GiWebSpitSlots> {
}
export {};
