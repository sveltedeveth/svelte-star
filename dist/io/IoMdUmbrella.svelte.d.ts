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
export type IoMdUmbrellaProps = typeof __propDef.props;
export type IoMdUmbrellaEvents = typeof __propDef.events;
export type IoMdUmbrellaSlots = typeof __propDef.slots;
export default class IoMdUmbrella extends SvelteComponentTyped<IoMdUmbrellaProps, IoMdUmbrellaEvents, IoMdUmbrellaSlots> {
}
export {};
