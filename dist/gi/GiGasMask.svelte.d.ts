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
export type GiGasMaskProps = typeof __propDef.props;
export type GiGasMaskEvents = typeof __propDef.events;
export type GiGasMaskSlots = typeof __propDef.slots;
export default class GiGasMask extends SvelteComponentTyped<GiGasMaskProps, GiGasMaskEvents, GiGasMaskSlots> {
}
export {};
