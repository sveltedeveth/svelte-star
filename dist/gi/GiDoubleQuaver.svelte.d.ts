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
export type GiDoubleQuaverProps = typeof __propDef.props;
export type GiDoubleQuaverEvents = typeof __propDef.events;
export type GiDoubleQuaverSlots = typeof __propDef.slots;
export default class GiDoubleQuaver extends SvelteComponentTyped<GiDoubleQuaverProps, GiDoubleQuaverEvents, GiDoubleQuaverSlots> {
}
export {};
