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
export type GiSasquatchProps = typeof __propDef.props;
export type GiSasquatchEvents = typeof __propDef.events;
export type GiSasquatchSlots = typeof __propDef.slots;
export default class GiSasquatch extends SvelteComponentTyped<GiSasquatchProps, GiSasquatchEvents, GiSasquatchSlots> {
}
export {};
