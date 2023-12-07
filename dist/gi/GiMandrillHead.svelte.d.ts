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
export type GiMandrillHeadProps = typeof __propDef.props;
export type GiMandrillHeadEvents = typeof __propDef.events;
export type GiMandrillHeadSlots = typeof __propDef.slots;
export default class GiMandrillHead extends SvelteComponentTyped<GiMandrillHeadProps, GiMandrillHeadEvents, GiMandrillHeadSlots> {
}
export {};
