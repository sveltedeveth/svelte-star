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
export type GiDinosaurRexProps = typeof __propDef.props;
export type GiDinosaurRexEvents = typeof __propDef.events;
export type GiDinosaurRexSlots = typeof __propDef.slots;
export default class GiDinosaurRex extends SvelteComponentTyped<GiDinosaurRexProps, GiDinosaurRexEvents, GiDinosaurRexSlots> {
}
export {};
