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
export type GiStoneSphereProps = typeof __propDef.props;
export type GiStoneSphereEvents = typeof __propDef.events;
export type GiStoneSphereSlots = typeof __propDef.slots;
export default class GiStoneSphere extends SvelteComponentTyped<GiStoneSphereProps, GiStoneSphereEvents, GiStoneSphereSlots> {
}
export {};
