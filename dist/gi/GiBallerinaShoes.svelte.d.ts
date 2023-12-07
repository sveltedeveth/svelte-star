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
export type GiBallerinaShoesProps = typeof __propDef.props;
export type GiBallerinaShoesEvents = typeof __propDef.events;
export type GiBallerinaShoesSlots = typeof __propDef.slots;
export default class GiBallerinaShoes extends SvelteComponentTyped<GiBallerinaShoesProps, GiBallerinaShoesEvents, GiBallerinaShoesSlots> {
}
export {};
