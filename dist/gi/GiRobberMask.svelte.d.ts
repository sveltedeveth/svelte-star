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
export type GiRobberMaskProps = typeof __propDef.props;
export type GiRobberMaskEvents = typeof __propDef.events;
export type GiRobberMaskSlots = typeof __propDef.slots;
export default class GiRobberMask extends SvelteComponentTyped<GiRobberMaskProps, GiRobberMaskEvents, GiRobberMaskSlots> {
}
export {};
