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
export type GiHexagonalNutProps = typeof __propDef.props;
export type GiHexagonalNutEvents = typeof __propDef.events;
export type GiHexagonalNutSlots = typeof __propDef.slots;
export default class GiHexagonalNut extends SvelteComponentTyped<GiHexagonalNutProps, GiHexagonalNutEvents, GiHexagonalNutSlots> {
}
export {};
