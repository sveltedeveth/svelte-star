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
export type GiCruiserProps = typeof __propDef.props;
export type GiCruiserEvents = typeof __propDef.events;
export type GiCruiserSlots = typeof __propDef.slots;
export default class GiCruiser extends SvelteComponentTyped<GiCruiserProps, GiCruiserEvents, GiCruiserSlots> {
}
export {};
