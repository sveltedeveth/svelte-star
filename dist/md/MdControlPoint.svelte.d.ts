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
export type MdControlPointProps = typeof __propDef.props;
export type MdControlPointEvents = typeof __propDef.events;
export type MdControlPointSlots = typeof __propDef.slots;
export default class MdControlPoint extends SvelteComponentTyped<MdControlPointProps, MdControlPointEvents, MdControlPointSlots> {
}
export {};
