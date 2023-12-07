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
export type GiContortionistProps = typeof __propDef.props;
export type GiContortionistEvents = typeof __propDef.events;
export type GiContortionistSlots = typeof __propDef.slots;
export default class GiContortionist extends SvelteComponentTyped<GiContortionistProps, GiContortionistEvents, GiContortionistSlots> {
}
export {};
