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
export type GiManaclesProps = typeof __propDef.props;
export type GiManaclesEvents = typeof __propDef.events;
export type GiManaclesSlots = typeof __propDef.slots;
export default class GiManacles extends SvelteComponentTyped<GiManaclesProps, GiManaclesEvents, GiManaclesSlots> {
}
export {};
