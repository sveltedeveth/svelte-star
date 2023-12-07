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
export type GiNoseFrontProps = typeof __propDef.props;
export type GiNoseFrontEvents = typeof __propDef.events;
export type GiNoseFrontSlots = typeof __propDef.slots;
export default class GiNoseFront extends SvelteComponentTyped<GiNoseFrontProps, GiNoseFrontEvents, GiNoseFrontSlots> {
}
export {};
